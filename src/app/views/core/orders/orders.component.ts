import { Component, OnInit } from '@angular/core';
import { CustomerService, EventService, CompanyService, OrderService } from '../../../services';

@Component({
    templateUrl: 'orders.component.html'
})

export class OrdersComponent implements OnInit {
    private companyId: string;
    public orders: any;
    public isLoaded = false;

    constructor(
        private eventService: EventService,
        private companyService: CompanyService,
        private orderService: OrderService
    ) { }

    getOrders() {
        this.orderService.getOrders(this.companyId).then( data => {
            this.orders = data;
            this.isLoaded = true;
        });
    }
    ngOnInit() {
        this.companyId = this.companyService.companyId;
        this.getOrders();
        this.eventService.on('order-list-update').subscribe( () => {
            this.getOrders();
        });
    }
}