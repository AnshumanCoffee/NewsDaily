import React from "react";
import NewsItem from "./NewsItem";

export class News extends React.Component {
  articles = [
    {
      status: "ok",
      totalResults: 4,
      articles: [
        {
          source: {
            id: "australian-financial-review",
            name: "Australian Financial Review",
          },
          author: "Tom Richardson",
          title:
            "Equities sell-off accelerates as investors dump banks, technology",
          description:
            "Investors bought gold miners and dumped interest rate-sensitive or consumer-facing stocks on fears a crisis is brewing in the global economy.",
          url: "http://www.afr.com/markets/equity-markets/equities-sell-off-accelerates-as-investors-dump-banks-technology-20220930-p5bmaw",
          urlToImage:
            "https://static.ffx.io/images/$zoom_0.5298%2C$multiply_2%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/ebceeba2e3000bdfa869ab70d0c842c9130e1e67",
          publishedAt: "2022-09-30T06:26:52Z",
          content:
            "Heavy selling on Wall Street spilled over to the S&amp;P/ASX 200 on Friday as investors dumped companies in the interest rate sensitive technology, utilities and financials sectors on worries rising … [+937 chars]",
        },
        {
          source: { id: "next-big-future", name: "Next Big Future" },
          author: "Brian Wang",
          title: "Meta Text to Video Generator | NextBigFuture.com",
          description:
            "Meta Make-A-Video research builds on the recent progress made in text-to-image generation technology built to enable text-to-video generation. The system uses",
          url: "https://www.nextbigfuture.com/2022/09/meta-text-to-video-generator.html",
          urlToImage:
          "https://live-production.wcms.abc-cdn.net.au/4142279bc46b858c490284aae0dc5f46?impolicy=wcms_crop_resize&cropH=247&cropW=439&xPos=0&yPos=94&width=862&height=485",
          publishedAt: "2022-09-30T06:09:56Z",
          content:
            "Meta Make-A-Video research builds on the recent progress made in text-to-image generation technology built to enable text-to-video generation. The system uses images with descriptions to learn what t… [+2065 chars]",
        },
        {
          source: { id: "abc-news-au", name: "ABC News (AU)" },
          author: "Shiloh Payne",
          title:
            "NASA releases detailed views of DART mission smashing into asteroid from James Webb, Hubble telescopes",
          description:
            "NASA's James Webb and Hubble space telescopes have captured views of the DART spacecraft intentionally smashing into an asteroid in a mission trialling technology for protecting Earth from potential asteroid collisions.",
          url: "http://www.abc.net.au/news/2022-09-30/james-webb-hubble-capture-dart-asteroid-impact/101489366",
          urlToImage:
            "https://live-production.wcms.abc-cdn.net.au/4142279bc46b858c490284aae0dc5f46?impolicy=wcms_crop_resize&cropH=247&cropW=439&xPos=0&yPos=94&width=862&height=485",
          publishedAt: "2022-09-29T23:42:20Z",
          content:
            "Two of NASA's space telescopes James Webb and Hubble have captured views of the DART spacecraft intentionally smashing into an asteroid in a mission that is trialling technology for protecting Earth … [+4354 chars]",
        },
        {
          source: { id: "newsweek", name: "Newsweek" },
          author: null,
          title: "Brand Loyalty Revolution by Oracle Advertising and CX",
          description:
            "How technology is changing the customer relationship game",
          url: "https://www.newsweek.com/sponsored/brand-loyalty-revolution-oracle-advertising-cx",
          urlToImage:
            "https://d.newsweek.com/en/full/1987118/oracle-advertising-cx-sq.jpg",
          publishedAt: "2022-02-16T19:17:44Z",
          content:
            "Brand Loyalty Revolution\r\nIn a world of more choice and increased consumer spending, brands are using creative solutions to grab customers' attention and keep them engaged. While shoppers seek out co… [+467 chars]",
        },
      ],
    },
  ];
  constructor() {
    //constructor tab run krta h jb iss  class ka koi object banta h ...
    super();
    console.log("I'm constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    console.log("cdm1");
    let url =" https://newsapi.org/v2/everything?q=tesla&from=2022-09-06&sortBy=publishedAt&apiKey=ebf7822aea2f4a3baec55f66d15e5926"
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

  render() {
    console.log("cdm2");

    // render method is a lifecycle method.
    // when react runs a compnent then a series of methods will run actually .
    //render first compile's JSX in HTML then it render's HTML .
    return (
      <div className="container my-3">
        <h2>{this.props.heading}</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 40): ""}
                  description={element.description?element.description.slice(0, 141):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
          })}
        </div>
      </div>
    )
  }
}

export default News;
