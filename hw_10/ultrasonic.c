#include <wiringPi.h>
#include <stdio.h>

#define TRIG 28
#define OUT 29

int main(void) {
    int dis = 0; 
    int i;
    long start, travel;

    if(wiringPiSetup() == -1) return 1;
    pinMode(TRIG, OUTPUT);
    pinMode(OUT, INPUT);

    for(i = 0; i < 20; i++) 
    {
        digitalWrite(TRIG, 0);
        usleep(2);
        digitalWrite(TRIG, 1);
        usleep(20);
        digitalWrite(TRIG, 0);

        while(digitalRead(OUT) == 0);
        start = micros();

        while(digitalRead(OUT) == 1);
        travel = micros() - start;
        dis = travel / 58;

        printf("%d", dis);
        delay(100);
    }
    delay(500);
}