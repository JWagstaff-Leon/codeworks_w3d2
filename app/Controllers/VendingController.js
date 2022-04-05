import { snacksService } from "../Services/SnacksService.js";
import { moneyService } from "../Services/MoneyService.js";
import { ProxyState } from "../AppState.js";
import { formatMoney } from "../Utils/formatMoney.js";

let intervalId = setInterval(_stockRandomSnack, Math.floor(Math.random() * 30000) + 15000);

function _drawSnacks()
{
    let template = "";
    ProxyState.snacks.forEach(v => template += v.Template);
    document.getElementById("snacks-list").innerHTML = template;
}

function _drawMoney()
{
    document.getElementById("money").innerText = "$" + formatMoney(ProxyState.money);
}

function _stockRandomSnack()
{
    clearInterval(intervalId);
    snacksService.stockRandomSnack();
    intervalId = setInterval(_stockRandomSnack, Math.floor(Math.random() * 30000) + 15000); 
}

export class VendingController
{
    constructor()
    {
        ProxyState.on("snacks", _drawSnacks);
        ProxyState.on("money", _drawMoney);

        _drawSnacks();
        _drawMoney();
    }

    addMoney(amount)
    {
        moneyService.addMoney(amount);
    }

    buySnack(snackId)
    {
        const snackIndex = snacksService.getSnackById(snackId);
        if(ProxyState.snacks[snackIndex].InStock && moneyService.addMoney(-1 * ProxyState.snacks[snackIndex].price) )
        {            
            snacksService.buySnack(snackId);
        }
    }
}