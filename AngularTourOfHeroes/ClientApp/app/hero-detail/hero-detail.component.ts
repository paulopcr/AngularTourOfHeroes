import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            const heroRetrived = this.heroService.getHero(+id);
            if (heroRetrived != null) {
                heroRetrived
                    .subscribe(hero => this.hero = hero as Hero);
            }
        }
    }

    goBack(): void {
        this.location.back();
    }
}