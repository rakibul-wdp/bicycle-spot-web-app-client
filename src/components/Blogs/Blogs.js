import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
  return (
    <div className='container'>
      <div>
        <h2>What is the difference between JavaScript and Node.js...???</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>JavaScript</th>
              <th className='text-center'>NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Javascript is a programming language or scripting language that is used for website interactive. It's
                run browser with browser engine. It used on the client-side
              </td>
              <td>
                NodeJS is an asynchronous event-driven Javascript runtime. Basically it's v8 engine and some c++ code.
                It used server-side.
              </td>
            </tr>
            <tr>
              <td>
                It used mainly for client-side. Like any kind of web application. It gives user better experience. Also
                it's provide some dynamic changes in web pages.
              </td>
              <td>
                We already know Javascript run in browser. But with NodeJS we can run Javascript outside the browser. I
                think it is the main purpose of NodeJS.
              </td>
            </tr>
            <tr>
              <td>In Javascript we can use or add html and play with dom to access or dynamic changes.</td>
              <td>On the other hand NodeJS doesn't have capability to add html tags.</td>
            </tr>
            <tr>
              <td>Javascript used in client-side or frontend development.</td>
              <td>NodeJS used in server-side or backend development.</td>
            </tr>
            <tr>
              <td>
                There are some popular javascript framework are React, Angular, Vue etc. We use in this time React.js
              </td>
              <td>Also NodeJS have some framework is Lodash, express etc. Currently we use express.js</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>When should use NodeJS and when Should use MongoDB...???</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>First Name</th>
              <th className='text-center'>Last Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Main thing of NodeJS is non-blocking, event-driven I/O to remain lightweight and efficient in the face
                of data-intensive real-time applications. Also it is fast, lightweight and efficient. Node.js uses
                javascript for creating node application or we can use any other language that ultimately compile or
                convert javascript. Node.js is suited for applications where you'd like to maintain a persistent
                connection from the browser back to the server.
              </td>
              <td>
                MongoDB is an open-source, non-relational database and developed by it own. Basically mongodb stores
                data as document in a binary representation called BSON(Binary JSON). Mongodb gives us flexibility to
                change data schema with modifying any of your existing data. It's horizontally scalable, which helps
                reduce the workload and scale. It doesn't require a database administrator. To storing large volumes fo
                data without structure. A NoSQL database doesn't limit storable data types.
              </td>
            </tr>
            <tr>
              <td>
                Node.js have some kind of tool that helps us building real-time web applications. It is very lightweight
                and fast. There has been over 200000 visits on this website in three weeks and minimal server resources
                has been able to handle it all. The counter is really easy to make to be real time. Node.js was easy to
                configure that we see current time when I start learning Node.js. And also if your are from javascript
                back ground and comfortable in writing Single Threaded code just like client side JS.
              </td>
              <td>
                High availability: when you need high availability of data with automatic, fast and instant data
                recovery. Using cloud computing and storage. Cloud-based storage is a great solution, but it requires
                data to be easily spread across multiple servers for scaling. Mongodb should use when integrating large
                amounts of diverse data, describing complex data structures that evolve. It is natural form to store
                data. It is human-readable.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>Differences between SQL and NoSQL database...!!!</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className='text-center'>SQL</th>
              <th className='text-center'>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                SQL is a relational database management system (RDBMS). In sql database data stay well decorated like
                table row.
              </td>
              <td>
                NoSQL database is non-relational or distributed database system. In nosql database data stored not like
                well decorated.
              </td>
            </tr>
            <tr>
              <td>
                SQL databases are better for multi-row transactions. It have fixed or static or predefined schema.
              </td>
              <td>NoSQL is better for unstructured data like documents or JSON. It's have dynamic schema.</td>
            </tr>
            <tr>
              <td>It's data storage model is tables with fixed rows and columns</td>
              <td>It stored data JSON documents, key-value, key-value pairs.</td>
            </tr>
            <tr>
              <td>SQL databases are vertically scalable. It's best suited for complex queries.</td>
              <td>NoSQL databases are horizontally scalable. It's not so good for complex queries.</td>
            </tr>
            <tr>
              <td>
                Faster query processing, standardized language, portable, interactive language, multiple data views.
              </td>
              <td>Flexible data models, horizontal scaling, fast queries, easy for developers.</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>What is the purpose of jwt and how does it work...???</h2>
        <div>
          <p>
            JSON Web Token mainly use for squire data from hacker or any other missing issue. It's an open standard for
            securely transmitting info. between parties as JSON object. It stores info. in an easy-to-access manner,
            both for developers and computers. Token is string of data that represents something else, such ans an
            identity.
          </p>
          <p>
            If a user sign in a website. JWT generate token and it stored. So jwt mainly give token user with
            validation. If the user again come to the website it verify user. If not verify send login page. Basically
            when the user successfully login in using their credentials, a JSON Web Token will be returned. Since tokens
            are credential, great care must be taken to prevent security issues. And also jwt have three part header,
            payload and signature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
