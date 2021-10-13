const bidsStorageKey = 'bids';

let bids;

let existingBids = retrieve();

if (existingBids) {
    bids = existingBids;
} else {
    bids = [

    ];
}

render()
function render() {

    // bids

    let bidHtml = '';
    bids.forEach((bid) => {
        bidHtml += `
      <div class="bid">
          <h3>${bid.bid}</h3>
          <h5 class="bid-username">${bid.user}</h5>
      </div>`;
    });
    console.log(bidHtml)
    document.getElementById('bids').innerHTML = bidHtml;
}

function newBID(username) {
    let bid = document.getElementById("bidder1").value;
    console.log(bid)
    bids.push(new BID(bid, username));
    render();
    save()
}
function newBID1(username) {
    let bid = document.getElementById("bidder1").value;
    let user = document.getElementById("submit1").innerText;
    console.log(bid)
    bids.push(new BID(bid, user));
    render();
    save()

}
function newBID2(username) {
    let bid = document.getElementById("bidder2").value;
    let user = document.getElementById("submit2").innerText;
    console.log(bid)
    bids.push(new BID(bid, user));
    render();
    save()
}


save();



function save() {
    localStorage.setItem(bidsStorageKey, JSON.stringify(bids));

}

function retrieve() {
    return JSON.parse(localStorage.getItem(bidsStorageKey))
}
