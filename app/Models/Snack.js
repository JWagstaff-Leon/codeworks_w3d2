export class Snack
{
    constructor(data, p_id)
    {
        this.name = data.name;
        this.price = data.price;
        this.image = data.image;

        this.id = p_id;

        this.stock = Math.floor(Math.random() * 7) + Math.floor(Math.random() * 3) + 2;
    }

    get Template()
    {
        return `
        <div class="col-3 my-2">
            <div class="card rounded-2" onclick="app.vendingController.buySnack('${this.id}')">
                <img src="${this.image}" alt="" class="card-img-top rounded-top-2" style="${this.InStock ? "filter: greyscale(70%)" : ""}">
                <div class="card-body">
                    <h3 class="card-title">${this.name}</h3>
                    <div class="d-flex justify-content-between">
                        <h5 class="card-subtitle text-secondary">$${this.price}</h5>
                        <h5 class="card-subtitle text-end ${this.InStock ? "text-secondary" : "text-danger"}">${this.InStock ? this.stock.toString() + " in stock" : "Out of Stock"}</h5>
                    </div>
                </div>
            </div>
        </div>`;
    }

    get InStock()
    {
        return this.stock > 0;
    }
}