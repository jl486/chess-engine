#ifndef BOARD_H
#define BOARD_H

#include <cstdint>
#include <string>
#include <iostream>
#include <bitset>

#define set_bit(b, i) ((b) |= (1ULL << i))
#define get_bit(b, i) ((b) & (1ULL << i))
#define clear_bit(b, i) ((b) &= ~(1ULL << i))
#define get_LSB(b) (__builtin_ctzll(b))

constexpr uint64_t FILE_A  = 0x0101010101010101ULL; 
constexpr uint64_t FILE_B  = 0x0202020202020202ULL;
constexpr uint64_t FILE_C  = 0x0404040404040404ULL;
constexpr uint64_t FILE_D  = 0x0808080808080808ULL;
constexpr uint64_t FILE_E  = 0x1010101010101010ULL;
constexpr uint64_t FILE_F  = 0x2020202020202020ULL;
constexpr uint64_t FILE_G  = 0x4040404040404040ULL;
constexpr uint64_t FILE_H  = 0x8080808080808080ULL;

class Board {
public:
    Board();
    Board(std::string fen);

    void test();

private:
    // bitboards
    uint64_t bpawn_bb,   wpawn_bb,
             bknight_bb, wknight_bb,
             bbishop_bb, wbishop_bb,
             brook_bb,   wrook_bb,
             bqueen_bb,  wqueen_bb,
             bking_bb,   wking_bb;
             
    inline int pop_LSB(uint64_t &b);

    constexpr uint64_t west(uint64_t b);
    constexpr uint64_t east(uint64_t b);
    constexpr uint64_t north(uint64_t b);
    constexpr uint64_t south(uint64_t b);
    constexpr uint64_t north_west(uint64_t b);
    constexpr uint64_t north_east(uint64_t b);
    constexpr uint64_t south_west(uint64_t b);
    constexpr uint64_t south_east(uint64_t b);
}

#endif // BOARD_H