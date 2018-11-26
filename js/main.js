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
    'title': "Work Example3",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "examples screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
