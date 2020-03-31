import React, { Component } from "react";
import { Grid, Menu, Image, Button } from "semantic-ui-react";

export default class Navbar extends React.Component {
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu
            id={"nav"}
            secondary
            icon
            className="ui stackable black  menu"
            size={"small"}
          >
            <Image
              size={"small"}
              src={
                "https://github.com/christianduncan/p2_client/blob/master/public/RescueLogo.png?raw=true"
              }
            />
            <Button.Group icon size={"mini"}>
              <Button color={"facebook"} class="ui facebook button">
                <div
                  class="fb-share-button"
                  data-href="https://developers.facebook.com/docs/plugins/"
                  data-layout="button"
                  data-size="large"
                >
                  <i class="facebook icon"></i>
                  <a
                    id="link"
                    target="_blank"
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                    class="fb-xfbml-parse-ignore"
                    data-text="Look through thousands of furry friends on Paws Rescue Adoption Hub!"
                    data-hashtags="RescuePaws"
                    data-show-count="false"
                  >
                    Facebook
                  </a>
                </div>
              </Button>

              <Button color={"twitter"} class="ui twitter button">
                <i class="twitter icon"></i>
                <a
                  id="link"
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  class="twitter-share-button"
                  data-size="large"
                  data-text="Look through thousands of furry friends on Paws Rescue Adoption Hub!"
                  data-hashtags="RescuePaws"
                  data-show-count="false"
                >
                  Twitter
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                ></script>
              </Button>
            </Button.Group>
            
          </Menu>
        </Grid.Column>
      </Grid.Row>
    )
  }
}
