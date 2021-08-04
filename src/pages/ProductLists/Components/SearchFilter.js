import React from 'react';
import './SearchFilter.scss';

class SearchFilter extends React.Component {
  render() {
    return (
      <div className="searchWrap">
        <ul className="searchFilter">
          <li>
            <button type="button" name="item" id="item">
              ITEM
            </button>
          </li>
          <li>
            <button type="button" name="item" id="item">
              COLOR
            </button>
          </li>
          <li>
            <button type="button" name="item" id="item">
              SIZE
            </button>
          </li>
          <li>
            <button type="button" name="item" id="item">
              PRICE
            </button>
          </li>
        </ul>
      </div>
      // {/* <div class="filterForm">
      //   <form action="" method="GET">
      //     <label for="item">
      //       상의
      //       <input type="checkbox" name="" id="item" value="" />
      //     </label>
      //     <label for="item">
      //       하의
      //       <input type="checkbox" name="" id="item" value="" />
      //     </label>
      //     <label for="item">
      //       아우터
      //       <input type="checkbox" name="" id="item" value="" />
      //     </label>
      //     <label for="item">
      //       비치웨어
      //       <input type="checkbox" name="" id="item" value="" />
      //     </label>
      //   </form>
      //   {/* item, color, size, price components */}
      // </div> */}
    );
  }
}

export default SearchFilter;
