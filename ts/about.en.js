//<![CDATA[
class Token {

    constructor(tokenInstance) {
        this.props = tokenInstance;
        this.setConfirm();
    }

    setConfirm() {
        window.onConfirm = function() {
            window.close();
        }
    }

    render() {
        let message = "Sample about page for your token, fill me up!";
        return`
        <div class="ui container">
          <div class="ui segment">
            <img src="data:image/png;base64,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">
            <span><bold><h3>${message}</h3></bold></span>
          </div>
        </div>
`;
    }
}

web3.tokens.dataChanged = (oldTokens, updatedTokens, tokenIdCard) => {
    const currentTokenInstance = web3.tokens.data.currentInstance;
    document.getElementById(tokenIdCard).innerHTML = new Token(currentTokenInstance).render();
};
//]]>
