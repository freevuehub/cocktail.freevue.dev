import { NextPage } from 'next'
import { Card } from '~/components'

const Home: NextPage = () => {
  return (
    <div className="d-flex fill height ai-center jc-center">
      <Card>
        <Card.Content>
          Hello World
        </Card.Content>
      </Card>
    </div>
  )
}

export default Home
