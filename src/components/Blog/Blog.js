import React from 'react';

const Blog = () => {
    return (
        <div className='container my-5'>
            <div className="accordion w-75 mx-auto" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Difference between nodejs and javascript
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
        1- 	Javascript is a programming language that is used for writing scripts on the website. and
        NodeJS is a Javascript runtime environment. <br />
        2- Javascript is used in frontend development. and Nodejs is used in server-side development. <br />
        3- Javascript basically used on the client-side. and Node js mostly used on the server-side. <br />
        4- Javascript is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. and Nodejs is written in C, C++ and Javascript.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      Difference between sql and nosql database
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        1- SQL is also pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database. and NoSQL is a distributed or Non-relational Database <br />
        2- Database, here is in table format. and NoSQL databases are document based with key-value pairs and graph databases. <br />
        3- Sql 	examples are Sqlite, MySql, Oracle, Postgres and MS-SQL. and Nosql Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        When should you used Node Js and When should you used Mongodb
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        <h4>Well, NodeJS and MongoDB are two different process. Here I tried to explain as simpler as possible</h4>
        <h5 className='text-primary'>Node Js</h5>
        <p>Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.</p>
        <h5 className='text-primary'>Mongo Db</h5>
        <p>But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.</p>

        <h6>Example-</h6>
        <p>1- The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
        <p>2- Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;