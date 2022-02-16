import { useParams } from 'react-router-dom'

import { useCard } from '../../api/useCardInfo'
import { baseUrl } from '../../constants/urls'
import { Wrapper } from '../../ui/Wrapper'
import { ProductInfo } from './info/ProductInfo'
import { RelatedFigures } from './RelatedFigures'

export const Product = () => {
  const { id } = useParams()

  const product = useCard(Number(id))
  const productInfo = product?.data.product
  const productImage = baseUrl + productInfo?.image
  const relativeCards = product?.data.relatedProducts

  return (
    <Wrapper>
      <ProductInfo
        id={Number(id)}
        description={productInfo?.description}
        image={productImage}
        name={productInfo?.name}
        price={productInfo?.price}
      />
      <RelatedFigures relativeCards={relativeCards} />
    </Wrapper>
  )
}
