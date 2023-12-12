package dean.gymtrack.service;

import dean.gymtrack.Entity.WorkoutDetail;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TrainingIdGenerator {
    private static final int MAX_SEQUENCE = 9999;
    private static final String CATEGORY_OF_GYMTRACK="511";
    private int sequence = 0;
    private final long startTimestamp;
    private long lastTimestamp = -1;

    public TrainingIdGenerator() {
        // Set the start date to my birthday: February 12, 1997
        LocalDateTime startDate = LocalDateTime.of(1997, 2, 12, 0, 0);
        this.startTimestamp = startDate.toInstant(ZoneOffset.UTC).toEpochMilli();
    }

    public synchronized String generateId() {
        long currentTimestamp = Instant.now().toEpochMilli() - startTimestamp;

        if (currentTimestamp != lastTimestamp) {
            sequence = 0;
            lastTimestamp = currentTimestamp;
        } else {
            if (sequence >= MAX_SEQUENCE) {
                sequence = 0;
            }
        }

        String timestamp = String.valueOf(currentTimestamp);
        String sequenceStr = String.format("%04d", sequence++);
        return CATEGORY_OF_GYMTRACK + timestamp + sequenceStr;
    }

    // Example enum for categories

}
