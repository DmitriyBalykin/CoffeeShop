import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes} from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  screen: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log('Workspace opened for');
    this.screen = this.router.snapshot.paramMap.get('id');
  }

}
