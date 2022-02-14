import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../ethereum/factory'
import Layout from '../components/Layout'
import { Link } from '../routes'

class CampaignIndex extends Component {

  //next does not run componentDidMount
  //it uses getInitialProps
  //static means class function
  static async getInitialProps() {
    //to call function getDeployedCampaigns in Campaign.sol CampaignFactory
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    return { campaigns }
  }
  renderCampaigns() {
    //check semantic ui card-->header,desc etc is from there
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      }
    })
    return <Card.Group items={items} />
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              {/*from semantic ui*/}
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    )
  }
}

export default CampaignIndex
