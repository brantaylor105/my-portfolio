import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Dad Jokes",
    'href': "https://x54phk6tc9.execute-api.us-west-2.amazonaws.com/Production/",
    'desc': "How did pirates collaborate before computers? Pier-to-Pier networking! This project uses AWS DynamoDB, Cloudwatch, Lambda, and API Gateway endpoints to fetch dad jokes from an external source (props to icanhazdadjokes.com), stores them in DynamoDB, and presents them with API Gateway. You can find the code for this project on my GitHub!",
    'image': {
      'desc': "Dad Jokes architecture",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Study Notes",
    'href': "http://polly.portfolio.brandontaylor.me",
    'desc': "This project uses AWS API Gateway, Lambda, DynamoDB, s3, SNS, and Amazon Polly to turn text files into mp3 files. You can upload your notes and convert them into an mp3 file so you can study them on the go!",
    'image': {
      'desc': "Study Notes Architecture",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Twitter Cats",
    'href': "https://ee51fd7h81.execute-api.us-west-2.amazonaws.com/Production",
    'desc': "This project uses the Twitter developer API to collect tweets about cats and store them into a DynamoDB table. It then runs the tweets through AWS Comprehend using Lambda and saves the sentiment results in a separate DynamoDB table. API Gateway then calls a lambda function to view the final results. This dataset includes over 1,000 tweets.",
    'image': {
      'desc': "Does Twitter hate cats?",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
