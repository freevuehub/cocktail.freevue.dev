import { NextPage, GetServerSideProps } from 'next'
import { css } from '@emotion/react'
import { Card, Tag } from '~/components'
import DATA_BASE from '~/DATA_BASE'
import { ICocktail } from '~/types'

interface IProps {
  list: ICocktail[]
}

const CardCss = () => css`
  min-width: 200px;
  max-width: 400px;
  .cover {
    max-height: 400px;
    overflow: hidden;
  }
`
const Home: NextPage<IProps> = (props) => {
  return (
    <div className="d-flex ai-start jc-space-between pa-2 flex-wrap">
      {
        props.list.map((item) => (
          <Card css={CardCss} href={item.name} key={item.name} className="mb-3">
            <div className="cover">
              <img className="d-block fill width" src={`/image/${item.image}`} alt={item.name} />
            </div>
            <Card.Content>
              <h2 className="mb-1">{item.name}</h2>
              <div className="d-flex flex-wrap ga-1">
                {
                  item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
                }
              </div>
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
