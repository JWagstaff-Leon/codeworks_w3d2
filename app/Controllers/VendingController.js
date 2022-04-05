import { snacksService } from "../Services/SnacksService.js";
import { moneyService } from "../Services/MoneyService.js";
import { ProxyState } from "../AppState.js";

function _drawSnacks()
{
    let template = "";
    ProxyState.snacks.forEach(v => template += v.Template);
    document.getElementById("snacks-list").innerHTML = template;
}

function _drawMoney()
{
    let template = "$";

    template += Math.floor(ProxyState.money).toString();
    switch(ProxyState.money - Math.floor(ProxyState.money))
    {
        case 0:
            template += ".00"; 
            break;
        case 0.25:
            template += ".25";
            break;
        case 0.5:
            template += ".50";
            break;
        case 0.75:
            template += ".75";
            break;
    }

    document.getElementById("money").innerText = template;
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