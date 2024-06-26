import { Card } from '../../components/ProductCards/card'
import addToCart from '../../images/add-to-cart.png'
import { observer, inject } from 'mobx-react'
import { productStore } from '../../api/store/productStore'
import { reviewStore } from '../../api/store/reviewStore'
import { useEffect, useState } from 'react'
import { PageButtons } from '../../components/ProfilePage/profileStyle'
import { CardContainer, PageButtonsDiv, StorePageContainer } from './storeStyle'
import { Link, useParams } from 'react-router-dom'
import { ReviewInt } from '../../api/models/review'
import cartStore from '../../api/store/cartStore'

// Inject the productStore into the component and make the component an observer of the store
const StorePage = inject('productStore')(
  observer(() => {

    // constant for the number of products per page
    const productsPerPage = 20

    // calculate the total number of pages needed
    const totalPages = Math.ceil(productStore.products.length / productsPerPage)

    // useState hook to keep track of loading state and current page
    //eslint-disable-next-line
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    // calculate the starting and ending indices for the products to display
    const startIndex = (currentPage - 1) * productsPerPage
    const endIndex = startIndex + productsPerPage

    const { gender } = useParams()

    // useEffect hook to call the getProducts method when the component loads and when the current page changes
    useEffect(() => {
      setLoading(true)
      productStore.getProducts(endIndex, gender)
      reviewStore.getReviews().then(() => setLoading(false))
    }, [currentPage, gender])
    
    useEffect(() => {
      let loggedUserDataCopy = JSON.parse(
        JSON.stringify(localStorage.getItem("AuthenticatedCustomer"))
      );
      let loggedUserData;
  
      if (loggedUserDataCopy !== null) {
        loggedUserData = JSON.parse(loggedUserDataCopy);
      }
      cartStore.getProducts(loggedUserData.currentUser.id);
    }, []);

    const reviewsByProductId: { [key: string]: ReviewInt[] } = {}

    reviewStore.reviews.forEach((review) => {
      if (!reviewsByProductId[review.productId]) {
        reviewsByProductId[review.productId] = []
      }
      reviewsByProductId[review.productId].push(review)
    })

    // function to handle changing the current page
    const handlePageChange = (newPage: number) => {
      setCurrentPage(newPage)
    }

    // function to render the products for the current page
    const renderProducts = () => {
      // map through the products and return a card component for each product
      return productStore.products.slice(startIndex, endIndex).map((props) => {
        if (!props._id) return null
        const productReviews = reviewsByProductId[props._id] || []

        if (!productReviews)
          return (
            <Card
              key={props._id}
              title={props.name}
              price={props.price}
              imgUrl={props.image[0]}
              addToCart={addToCart}
              rating={0}
            />
          )
          // calculate the average rating for the product
        const averageRating = productReviews.length
          ? productReviews.reduce(
              (acc, review) => acc + Number(review.rating),
              0,
            ) / productReviews.length
          : 0

        return (
          <Link style={{ textDecoration: 'none' }} to={`/parfum/${props._id}`}>
            <Card
              key={props._id}
              title={props.name}
              price={props.price}
              imgUrl={props.image[0]}
              addToCart={addToCart}
              rating={averageRating}
            />
          </Link>
        )
      })
    }

    return (
      <StorePageContainer>
        <CardContainer>{renderProducts()}</CardContainer>
        {/* render the page buttons */}
        <PageButtonsDiv>
          {[...Array(totalPages)].map((_, index) => (
            <PageButtons
              key={index}
              onClick={() => handlePageChange(index + 1)}
              style={{
                backgroundColor:
                  index + 1 === currentPage ? 'lightgray' : 'white',
              }}
            >
              {index + 1}
            </PageButtons>
          ))}
        </PageButtonsDiv>
      </StorePageContainer>
    )
  }),
)

export default StorePage
