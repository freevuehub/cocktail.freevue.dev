import { NextPage, GetServerSideProps } from 'next'
import { css } from '@emotion/react'
import { Card } from '~/components'
import DATA_BASE from '~/DATA_BASE'
import { ICocktail } from '~/types'

interface IProps {
  list: ICocktail[]
}

const CardCss = () => css`
  width: 45%;
`
const Home: NextPage<IProps> = (props) => {
  console.log(props)
  return (
    <div className="d-flex fill height ai-start jc-space-between pa-2 flex-wrap">
      {
        props.list.map((item) => (
          <Card key={item.name} css={CardCss}>
            <img className="d-block fill width" src={`/image/${item.image}`} alt={item.name} />
            <Card.Content>
              <h3>{item.name}</h3>
            </Card.Content>
          </Card>
        ))
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const list = [...DATA_BASE.values()]

  return {
    props: {
      list,
    }
  }
}

export default Home
