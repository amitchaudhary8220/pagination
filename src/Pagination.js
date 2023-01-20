import React from 'react'
import './pagination.css'

const Pagination = ({ total,page,setPage }) => {
    // console.log(page);
    const onClickHandler = (e) =>
    {
        console.log(e.target.outerText);
        setPage(e.target.outerText);
    }
    const onDownkeyHander = () => {
        setPage(page - 1);
    }
    const onUpkeyHandler = () => {
        setPage(page + 1);
    }
  return (
    <>
          {total > 1 && (
              <div>
                  <span onClick={onDownkeyHander}>{'<'}</span>
                  {[...new Array(total / 10 - 1)].map((_, num) => {
              return<span>
            
                  <span key={num} onClick={(e) => onClickHandler(e)}>{num + 1}</span>
              </span>
          })
                  }
                  <span onClick={onUpkeyHandler}>{'>'}</span>
         </div> 
              
      )}
    </>
  )
}

export default Pagination
