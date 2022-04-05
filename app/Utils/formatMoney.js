export function formatMoney(money)
{
    if(typeof money !== "number")
    {
        return undefined;
    }

    let template = "";

    template += Math.floor(money).toString();
    switch(money - Math.floor(money))
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

    return template;
}