CC = g++
CFLAGS = -wall -g

main: main.o board.o
	$(CC) $(CFLAGS) -o main main.o board.o

main.o: main.cpp board.hpp
	$(CC) $(CFLAGS) -c main.cpp

board.o: board.hpp