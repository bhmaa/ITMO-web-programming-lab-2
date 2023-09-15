package bhma.weblab2.beans;

import java.io.Serializable;

public class TableRow implements Serializable {
    private double x;
    private double y;
    private double r;
    private HitResult hitResult;
    private String currentTime;
    private double executionTime;

    public TableRow() {
    }

    public TableRow(double x, double y, double r, HitResult hitResult, String currentTime, double executionTime) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.hitResult = hitResult;
        this.currentTime = currentTime;
        this.executionTime = executionTime;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public HitResult getHitResult() {
        return hitResult;
    }

    public void setHitResult(HitResult hitResult) {
        this.hitResult = hitResult;
    }

    public String getCurrentTime() {
        return currentTime;
    }

    public void setCurrentTime(String currentTime) {
        this.currentTime = currentTime;
    }

    public double getExecutionTime() {
        return executionTime;
    }

    public void setExecutionTime(double executionTime) {
        this.executionTime = executionTime;
    }
}
