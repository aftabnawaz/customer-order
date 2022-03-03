import React, { useState } from 'react';
import "./pagination.scss";
export default function Pagination({ handlePagination }) {
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [disableNextBtn, setDisableNextBtn] = useState(false);
    const [disableBackBtn, setDisableBackBtn] = useState(true);

    function selectedPage(pageNo) {
        setDisableBackBtn(currentPageNo === 2);
        setDisableNextBtn(currentPageNo === 1);
        handlePagination(pageNo);
        setCurrentPageNo(pageNo);
    }

    function backPage() {
        if (currentPageNo === 1) {
            return;
        }
        setCurrentPageNo(currentPageNo - 1);
        handlePagination(currentPageNo - 1);
        setDisableNextBtn(false);
        setDisableBackBtn(true);
    }

    function nextPage() {
        if (currentPageNo === 2) {
            return;
        }
        handlePagination(currentPageNo + 1);
        setCurrentPageNo(currentPageNo + 1);
        setDisableBackBtn(false);
        setDisableNextBtn(true);
    }

    return (
        <div className="pagination">
            <div className='container'>
                <button className={!disableBackBtn ? "back-next-btn active-btn" : "back-next-btn"} onClick={() => backPage()}> Back</button>
                <button className={currentPageNo === 1 ? 'button active-button' : "button"} onClick={() => selectedPage(1)}> 1</button>
                <button className={currentPageNo === 2 ? 'button active-button' : "button"} onClick={() => selectedPage(2)}> 2</button>
                <button className={!disableNextBtn ? "back-next-btn active-btn" : "back-next-btn"} onClick={() => nextPage()}> Next</button>
            </div>
        </div>
    );
}
