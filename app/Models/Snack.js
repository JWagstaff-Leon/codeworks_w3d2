export class Snack
{
    constructor(data)
    {
        this.name = data.name;
        this.price = data.price;
        this.image = data.image;
        this.stock = Math.floor(Math.random() * 7) + Math.floor(Math.random() * 3) + 2;
    }

    get Template()
    {
        return `
        <div class="col-3 my-2">
            <div class="card rounded-2">
                <img src="${this.image}" alt="" class="card-img-top rounded-top-2">
                <div class="card-body">
                    <h3 class="card-title">${this.name}</h3>
                    <h5 class="card-subtitle text-secondary">$${this.price}</h5>
                </div>
            </div>
        </div>`;
    }
}