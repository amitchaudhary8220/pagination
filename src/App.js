import { useEffect, useState } from 'react';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [product, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotalPage] = useState(1);
  const fetchData = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100&skip=10&select=title,price');
    const data = await res.json();
    console.log('data',data);
    if(data&&data.products)
      setProducts(data.products);
    setTotalPage(data.limit);




  }
  console.log('page ',page);

  useEffect(() => {
    fetchData();
  
  
  }, [])
  
  return (
    <div>
      
     
      {product.length >0 && (
       
        product.slice(page*10-10,page*10).map((prod) => {
          return (<span key={prod.id}>
            <span>{prod.id}</span>
            <span>{prod.price}</span>
            <span>{prod.title}</span>
          </span>
        )
        })
      )
      
      }
      {total > 1 && <Pagination total={total} page={page} setPage={setPage} />}
   </div>
  );
}

export default App;
