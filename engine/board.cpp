#include "board.hpp"

Board::Board() {
    Board("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQKQ - 0 1");
}

Board::Board(std::string fen) {
    int curr_bit = 56;
    for(char ch : fen) {
        if (ch == ' ') {
            break;
        } else if (ch == '/') {
            curr_bit -= 16;
        } else if (isdigit(ch)) {
            curr_bit += (int)(ch - '0');
        } else {
            switch(ch) {
                case 'r': set_bit(brook_bb, curr_bit); break;
                case 'n': set_bit(bknight_bb, curr_bit); break;
                case 'b': set_bit(bbishop_bb, curr_bit); break;
                case 'q': set_bit(bqueen_bb, curr_bit); break;
                case 'k': set_bit(bking_bb, curr_bit); break;
                case 'R': set_bit(wrook_bb, curr_bit); break;
                case 'N': set_bit(wknight_bb, curr_bit); break;
                case 'B': set_bit(wbishop_bb, curr_bit); break;
                case 'Q': set_bit(wqueen_bb, curr_bit); break;
                case 'K': set_bit(wking_bb, curr_bit); break;
            }
        }
        ++curr_bit;
    }
}

inline int Board::pop_LSB(uint64_t &b) {
    int i = get_LSB(b);
    b &= b - 1;
    return i;
}

constexpr uint64_t Board::west(uint64_t b) {
    return (b & ~FILE_A) << 1);
}

void Board::test() {
    std::bitset<64> b1 = bpawn_bb;
    std::cout << b1.to_string() << "\n";
    std::bitset<64> b2 = west(bpawn_bb);
    std::cout << b2.to_string();

}

