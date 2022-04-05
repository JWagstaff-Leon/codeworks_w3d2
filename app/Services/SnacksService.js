import { Snack } from "../Models/Snack.js";
import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
import { Pop } from "../Utils/Pop.js";

// TODO fill in this list
/*******************************************************************************
* each snack will be a POJO with: name, price, image
*******************************************************************************/
const snackList = [
    {
        // original image at https://unsplash.com/photos/S4PC4SeKwKg
        name: "Chips",
        price: 0.75,
        image: "./assets/img/chips.jpg"
    },

    {
        // original image at https://unsplash.com/photos/5GJBlLNkhSE
        name: "Chocolate bar",
        price: 1.25,
        image: "./assets/img/chocolate.jpg"
    },

    {
        // original image at https://unsplash.com/photos/-tR4fnNJW2A
        name: "Pastry Pack",
        price: 2.00,
        image: "./assets/img/pastry.jpg"
    },

    {
        // original image at https://unsplash.com/photos/jh5XyK4Rr3Y
        name: "Microwave Burger",
        price: 4.25,
        image: "./assets/img/burger.jpg"
    },

    {
        // original image at https://unsplash.com/photos/9-OCsKoyQlk
        name: "Water Bottle",
        price: 0.50,
        image: "./assets/img/water.jpg"
    },

    {
        // original image at https://unsplash.com/photos/pCjw_ygKCv0
        name: "Juice",
        price: 1.50,
        image: "./assets/img/juice.jpg"
    },

    {
        // original image at https://unsplash.com/photos/lpv--JSLa58
        name: "Soda",
        price: 1.75,
        image: "./assets/img/soda.jpg"
    },

    {
        // original image at https://unsplash.com/photos/3OV0ft7mG_o
        name: "Health Drink",
        price: 3.25,
        image: "./assets/img/health.jpg"
    }
];

class SnacksService
{
    constructor()
    {
        snackList.forEach(v => ProxyState.snacks.push(new Snack(v, generateId())));
        ProxyState.snacks = ProxyState.snacks;
    }

    buySnack(snackId)
    {
        const snackIndex = this.getSnackById(snackId);
        ProxyState.snacks[snackIndex].stock -= 1;
        ProxyState.snacks = ProxyState.snacks;
        return true;
    }

    getSnackById(p_id)
    {
        return ProxyState.snacks.findIndex(v => v.id === p_id);
    }

    stockRandomSnack()
    {
        const selectedSnackIndex = Math.floor(Math.random() * ProxyState.snacks.length);

        ProxyState.snacks[selectedSnackIndex].stock += Math.floor(Math.random() * 2.1) + 1;
        ProxyState.snacks = ProxyState.snacks;

        Pop.toast(`${ProxyState.snacks[selectedSnackIndex].name} has been restocked`, "warning", "top-end", 8000, true);
    }
}

export const snacksService = new SnacksService();