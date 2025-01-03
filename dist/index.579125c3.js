// Рассчёт доставки
function calculateDelivery() {
    const distance = parseFloat(document.getElementById("dist").value);
    const typeDelivery = document.getElementById("type").value;
    const packing = document.getElementById("pack").checked;
    if (isNaN(distance) || distance <= 0) {
        document.getElementById("cost").innerText = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435.";
        return;
    }
    const cost = getDeliveryCost(distance, typeDelivery, packing);
    document.getElementById("cost").innerText = cost.toFixed(2) + " \u0440\u0443\u0431.";
}
// Функция для расчёта стоимости
function getDeliveryCost(distance, typeDelivery, packing) {
    const tarif = 5;
    let ratioDelivery = typeDelivery === "standard" ? 1 : 1.3;
    let ratioPacking = packing ? 15 : 0;
    return distance * tarif * ratioDelivery + ratioPacking;
}

//# sourceMappingURL=index.579125c3.js.map
