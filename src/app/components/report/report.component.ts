import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { SettingService } from '../../services/settings/setting.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {
  reportForm!: FormGroup;
  maxID: number = 0;
  imageStore: any;

  constructor(private formBuilder: FormBuilder, private _report: ReportService, private _setting: SettingService) { 
    this.reportForm = formBuilder.group({
      description: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getHighestID();
    // this.initCamera();
  }

  initCamera() {
    const constraints = {
      video: { facingMode: 'environment' } // Default to back camera
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = document.getElementById('camera-preview') as HTMLVideoElement;
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }

  selectCamera(event: any) {
    const cameraType = event.target.value;
    const constraints = {
      video: { facingMode: cameraType }
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        const video = document.getElementById('camera-preview') as HTMLVideoElement;
        video.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }

  // capturePhoto() {
  //   const video = document.getElementById('camera-preview') as HTMLVideoElement;
  //   const canvas = document.getElementById('captured-photo') as HTMLCanvasElement;
  //   const context = canvas.getContext('2d');

  //   if (context && video) {
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     const imageDataURL = canvas.toDataURL('image/png');
  //     const capturedImage = document.getElementById('captured-image') as HTMLImageElement;
  //     capturedImage.src = imageDataURL;
  //     canvas.style.display = 'none';
  //     capturedImage.style.display = 'block';
  //     // console.log(capturedImage);
  //     this.imageStore = capturedImage; 
      
  //   }
  // }

  capturePhoto() {
    const video = document.getElementById('camera-preview') as HTMLVideoElement;
    const canvas = document.getElementById('captured-photo') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
  
    if (context && video) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        // Convert the image to a Blob object
        if (blob) {
          const capturedImage = new File([blob], 'captured_image.png', { type: 'image/png' });
          this.imageStore = capturedImage;
          // Display the captured image if needed
          const capturedImageView = document.getElementById('captured-image') as HTMLImageElement;
          capturedImageView.src = URL.createObjectURL(blob);
          capturedImageView.style.display = 'block';
          // Hide the canvas
          canvas.style.display = 'none';
        } else {
          console.error('Failed to capture the image');
        }
      }, 'image/png');
    }
  }
  

  getHighestID() {
    this._report.getReportsIncident().subscribe(report => {
      this._setting.simplifyData(report.data).forEach(id => {
      this.maxID =  Math.max(this.maxID,id.id);
      // this.maxID += 1;
      
      });            
      
    })
  }

  createReportSubmit() {
    const currentDate = new Date();

    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear(); 
    
    const hours = currentDate.getHours(); 
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    

    const description = this.reportForm.get('description')?.value;
    const location = this.reportForm.get('location')?.value;
    const currId = this.maxID+1;

    const currDate = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

    if(this.reportForm.valid) {
      this.inserReport(currId, description, currDate, location, this.imageStore);
    }    
    console.log(currDate);
    
  }


  inserReport(id: number ,description: string, currDate: string,  location: string, image: File) {
    
    let dataInsert: any = {
      id,
      description,
      date: currDate,
      location,
      image
    }

    this._report.createRportIncident(dataInsert).subscribe(res => {
      console.log(res, 'Data inserted!');
    });
  }
}

