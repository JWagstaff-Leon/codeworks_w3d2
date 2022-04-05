import { ProxyState } from "../AppState.js";

class MoneyService
{
    addMoney(amount)
    {
        if(ProxyState.money + amount >= 0)
        {
            ProxyState.money += amount;
            return true;
        }

        return false;
    }
}

export let moneyService = new MoneyService();