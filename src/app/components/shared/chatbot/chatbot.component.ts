import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChatbotService } from '../../../services/chatbot.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit {

  userMessage!: string;
  computerMessage!: string;
  requestMessages:string[] = [];
  questionMessages:string[] = [];
  response:string[] = [];
  questionForm!: FormGroup;

  constructor(private _bot: ChatbotService, private formBuilder: FormBuilder){
    this.questionForm = formBuilder.group({
      question: ['', Validators.required]
    });
  }



  ngOnInit(): void {
  }

  chatwithEnvironmentalist() {
    const message = 'Hi';

    this._bot.talktoBotNow(message).subscribe((res: any) => {
      this.questionMessages.push(res['result']);
    });
  }

  onClickSendMessage() {
    const userQuestion = this.questionForm.get('question')?.value;
    this.userMessage = userQuestion;
    this.requestMessages.push(this.userMessage);
    this.response = [...this.requestMessages, ...this.questionMessages];

    this._bot.talktoBotNow(userQuestion).subscribe((res: any) => {
      this.computerMessage = res.result;
      this.questionMessages.push(this.computerMessage);
      this.response = [...this.requestMessages, ...this.questionMessages];
    });

    this.questionForm.reset();
  }


  clearMessage() {
    this.questionMessages = [];
    this.requestMessages = [];
  }

}
