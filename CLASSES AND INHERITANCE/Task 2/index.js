class phone {
    constructor(brand, model, batteryCapacity, screenSize, cameraQuality) {
        this.brand = brand;
        this.model = model;
        this.batteryCapacity = batteryCapacity;
        this.screenSize = screenSize;
        this.cameraQuality = cameraQuality;
    }
}
const iPhone = new phone('Apple', 'iPhone 14', 3279, 6.1, 12);
const Techno = new phone('Camon 20', 'Techno', 5000, 6.3, 50);
const samsungGalaxy = new phone('Samsung', 'Galaxy s22', 3700, 6.1, 50);

console.log(iPhone);
console.log(Techno);
console.log(samsungGalaxy);