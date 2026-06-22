function Pagination({
    currentPage,
    totalPages,
    setCurrentPage,
}) {
    const pages = [...Array(totalPages).keys()].map(
        (num) => num + 1
    );

    return ( <
        div className = "pagination" > {
            pages.map((page) => ( <
                button key = { page }
                className = {
                    currentPage === page ?
                    "page-btn active" :
                        "page-btn"
                }
                onClick = {
                    () => setCurrentPage(page) } >
                { page } <
                /button>
            ))
        }

        {
            currentPage < totalPages && ( <
                button className = "page-btn"
                onClick = {
                    () =>
                    setCurrentPage(currentPage + 1)
                } >
                Next→ <
                /button>
            )
        } <
        /div>
    );
}

export default Pagination;