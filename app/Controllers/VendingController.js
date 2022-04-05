import { snacksService } from "../Services/SnacksService.js";
import { moneyService } from "../Services/MoneyService.js";
import { ProxyState } from "../AppState.js";
import { formatMoney } from "../Utils/formatMoney.js";

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