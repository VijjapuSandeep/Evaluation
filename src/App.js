
import React, { useState } from 'react'
import DATA from './API.json'
import "./App.css";

const Search = () => {
  const [filter, setFilter] = useState('');
  const SearchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = DATA.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
  });
  
  return (
    <section className='py-4 container'>
      <h1>React Sports Search</h1>
      <input type="text" className='app__input' placeholder='Sports Name' value={filter} onChange={SearchText.bind(this)} />
      <input className="app__submit" type="submit" value="Search" />
      <div><span> Search results for -</span></div>
      <div><span>Count - </span></div>
      <div className="col-md-14">
        <div className="row">
          {dataSearch.map((item, index) => {
            return (
              <>
                <div className="col-md-4 mb-4" key={item.id}>
                  <div class="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.label}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Search;
