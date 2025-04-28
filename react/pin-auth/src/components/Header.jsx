function Header({ touristName, showImage}) {
    return (
        <header>
            <h1>
                {showImage ? `${touristName}'s Vacation Time!` : `Hi ${touristName}`}
            </h1>
            {!showImage && <h2>Open Flight centre Vault</h2>}
        </header>
    )
}

export default Header