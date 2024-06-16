import { OnQueueActive, OnQueueCompleted, Process, Processor } from "@nestjs/bull";
import { TRANSCODE_QUEUE } from "./constants";
import { Logger } from "@nestjs/common";
import { Job } from "bull";

@Processor(TRANSCODE_QUEUE)
export class TranscodeConsumer {
    private readonly logger = new Logger(TranscodeConsumer.name);

    @Process()
    async transcode(job: any) {
        this.logger.log(`message: ${job.id}`);
        this.logger.log('File: ' + job.data.file);
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 8000));
        this.logger.log('Transcoding completed for job: ' + job.id);
    }

    @OnQueueActive()
    onActive(job: Job<unknown>) {
        // Log that job is starting
        Logger.log(`Starting job ${job.id} : ${job.data['custom_id']}`);
    }

    @OnQueueCompleted()
    onCompleted(job: Job<unknown>) {
        // Log job completion status
        Logger.log(`Job ${job.id} has been finished`);
    }
}
