import { NextPage, GetServerSideProps } from 'next'
import { Card, Tag, Button } from '~/components'
import DATA_BASE from '~/DATA_BASE'
import { ICocktail } from '~/types'

interface IProps {
  data: ICocktail
}

const Detail: NextPage<IProps> = (props) => {
  return (
    <div className="pa-3">
      <Card>
        <img className="d-block fill width" src={`/image/${props.data.image}`} alt={props.data.name} />
      </Card>
      <div className="mt-2 mb-2">
        <h1 className="mb-1">{props.data.name}</h1>
        <p>
          {props.data.comment}
        </p>
      </div>
      <hr />
      <div className="mt-3 mb-3">
        <h3>레시피</h3>
        <ol className="pl-1 pr-1">
          {
            props.data.recipe.map((recipe) => (
              <li key={recipe} className="mb-1 mt-1">
                <p>{recipe}</p>
              </li>
            ))
          }
        </ol>
      </div>
      <hr />
      <div className="mt-3 mb-3 d-flex flex-wrap ga-1">
        {
          props.data.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)
        }
      </div>
      <hr />
      <div className="mt-3 d-flex jc-center">
        <Button href="/">목록</Button>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = DATA_BASE.get(context.query.id)

  return {
    props: {
      data,
    }
  }
}

export default Detail
