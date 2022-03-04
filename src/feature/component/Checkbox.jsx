import React from 'react'

function Chexbox() {
  return (
    <div className="checkbox">
      <h3 className="checkbox_title">
        Lọc theo giá
      </h3>
      <div className="checkbox_item">
        <input type="checkbox" className="checkbox_item_input"  />
        <div className="checkbox_item_lable">
          Dưới 100.000 vnđ
        </div>
      </div>

      <div className="checkbox_item">
        <input type="checkbox" className="checkbox_item_input"  />
        <div className="checkbox_item_lable">
         100.000-500.000 vnđ
        </div>
      </div>

      <div className="checkbox_item">
        <input type="checkbox" className="checkbox_item_input"  />
        <div className="checkbox_item_lable">
          Trên 500.000 vnđ
        </div>
      </div>
      
    </div>
  )
}

export default Chexbox
