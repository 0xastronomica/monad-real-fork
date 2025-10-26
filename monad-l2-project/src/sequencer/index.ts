class Sequencer {
    private transactionQueue: any[];

    constructor() {
        this.transactionQueue = [];
    }

    enqueueTransaction(transaction: any): void {
        this.transactionQueue.push(transaction);
    }

    processQueue(): void {
        while (this.transactionQueue.length > 0) {
            const transaction = this.transactionQueue.shift();
            this.processTransaction(transaction);
        }
    }

    private processTransaction(transaction: any): void {
        // Logic to process the transaction
    }
}

export default Sequencer;