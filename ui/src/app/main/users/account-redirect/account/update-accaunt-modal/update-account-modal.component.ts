import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {User} from '../../../../../domain/User';
import {AccountUpdateRequest} from '../../../../../domain/request/account/UpdateProfileRequest';
import {RequestStatuses} from '../../../../../components/RequestStatuses';
import {Country} from '../../../../../domain/Country';
import {CatalogApiService} from '../../../../catalog-api.service';

@Component({
    selector: 'app-update-account-modal',
    templateUrl: './update-account-modal.component.html',
    styleUrls: ['./update-account-modal.component.scss']
})
export class UpdateAccountModalComponent implements OnInit, OnChanges {
    @Input() user: User;

    @Input() submit: any;

    countries: Country[];

    accountUpdateRequestStat: RequestStatuses;

    updateForm: FormGroup;

    constructor(public bsModalRef: BsModalRef,
                private formBuilder: FormBuilder,
                private catalogApiService: CatalogApiService
    ) {
    }

    ngOnInit(): void {
        this.updateForm = this.formBuilder.group({
                name: ['', Validators.required],
            }
        );

        this.catalogApiService.getCountries().subscribe(value => {
            this.countries = value;
        });

        if (this.user) {
            this.refreshForm();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.user) {
            this.refreshForm();
        }
    }

    refreshForm() {
        this.getControl('name').setValue(this.user.name);
    }

    close() {
        this.bsModalRef.hide();
    }

    submitRequest() {
        const updateProfileRequest: AccountUpdateRequest = {
            name: this.getControl('name').value,
            countryCode: null,
        };

        this.submit(updateProfileRequest);
    }


    getControl(name: string) {
        return this.updateForm.get(name);
    }

}
