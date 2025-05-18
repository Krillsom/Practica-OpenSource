export class ItemEvent {
  id: number;
  name: string;
  description: string;
  scheduledAt: Date

  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.scheduledAt = new Date();
  }
}
