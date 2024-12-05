import { useState } from "react";

function App() {
  const titleField = "";
  const articleList = [];

  const handleInsertPostSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <section className="py-4">
          <form onSubmit={handleInsertPostSubmit}>
            <h4>Insert form</h4>
            <div className="row">
              <div className="col-4">
                <label className="form-label" htmlFor="post-title">
                  Titolo
                </label>
                <input type="text" className="form-control" id="post-title" />
              </div>

              <div className="col-12">
                <button className="btn btn-success my-2">Crea post</button>
              </div>
            </div>
          </form>
        </section>
        <section>
          <h4>Post list</h4>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <h2>Post title</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
