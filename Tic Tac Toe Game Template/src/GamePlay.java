import java.awt.event.*;
import javax.swing.*;
import java.awt.*;
import javax.swing.JOptionPane;
class GamePlay implements ActionListener{
    JFrame f;
    JButton b1,b2,b3,b4,b5,b6,b7,b8,b9,b0,bx,reset,sel;
    JLabel l1,l2;
    JPanel p;
    String s1="0",result;
    int count=0;
    int won=0;
    GamePlay(String s){
        f=new JFrame(s);
        f.setSize(500,500);
        b1=new JButton();
        b2=new JButton();
        b3=new JButton();
        b4=new JButton();
        b5=new JButton();
        b6=new JButton();
        b7=new JButton();
        b8=new JButton();
        b9=new JButton();
        b0=new JButton("O");
        bx=new JButton("X");
        sel=new JButton("Select Option");
        reset=new JButton("RESET");
        l1=new JLabel(new ImageIcon("backimg.PNG"));
        p=new JPanel();
        Container c=f.getContentPane();
        c.setBackground(Color.BLACK);
        b1.setBounds(70,110,80,80);
        b2.setBounds(150,110,80,80);
        b3.setBounds(230,110,80,80);
        b4.setBounds(70,190,80,80);
        b5.setBounds(150,190,80,80);
        b6.setBounds(230,190,80,80);
        b7.setBounds(70,270,80,80);
        b8.setBounds(150,270,80,80);
        b9.setBounds(230,270,80,80);
        b0.setBounds(350,150,80,80);
        bx.setBounds(350,260,80,80);
        reset.setBounds(130,380,120,60);
        sel.setBounds(320,360,120,50);
        p.setBounds(40,0,400,100);
        p.add(l1);
        f.add(p);
        f.add(b1);
        f.add(b2);
        f.add(b3);
        f.add(b4);
        f.add(b5);
        f.add(b6);
        f.add(b7);
        f.add(b8);
        f.add(b9);
        f.add(b0);
        f.add(bx);
        f.add(reset);
        f.add(sel);
        f.setLayout(null);
        f.setVisible(true);
        b0.addActionListener(this);
        bx.addActionListener(this);
        b1.addActionListener(this);
        b2.addActionListener(this);
        b3.addActionListener(this);
        b4.addActionListener(this);
        b5.addActionListener(this);
        b6.addActionListener(this);
        b7.addActionListener(this);
        b8.addActionListener(this);
        b9.addActionListener(this);
        reset.addActionListener(this);
    }
    public void actionPerformed(ActionEvent e){
        if(e.getSource()==b0){
            s1=b0.getText();
        }
        if(e.getSource()==bx){
            s1=bx.getText();
        }
        if((e.getSource()==b1)||(e.getSource()==b2)||(e.getSource()==b3)||(e.getSource()==b4)||(e
                .getSource()==b5)||(e.getSource()==b6)||(e.getSource()==b7)||(e.getSource()==b8)||(e.getSource(
        )==b9)||(e.getSource()==reset)){
            if(s1.equals("0")){
                return;
            }
            else{
                b0.setEnabled(false);
                bx.setEnabled(false);
                if(e.getSource()==b1){
                    b1.setText(s1);
                    b1.setEnabled(false);
                }
                if(e.getSource()==b2){
                    b2.setText(s1);
                    b2.setEnabled(false);
                }
                if(e.getSource()==b3){
                    b3.setText(s1);
                    b3.setEnabled(false);
                }
                if(e.getSource()==b4){
                    b4.setText(s1);
                    b4.setEnabled(false);
                }
                if(e.getSource()==b5){
                    b5.setText(s1);
                    b5.setEnabled(false);
                }
                if(e.getSource()==b6){
                    b6.setText(s1);
                    b6.setEnabled(false);
                }
                if(e.getSource()==b7){
                    b7.setText(s1);
                    b7.setEnabled(false);
                }
                if(e.getSource()==b8){
                    b8.setText(s1);
                    b8.setEnabled(false);
                }
                if(e.getSource()==b9){
                    b9.setText(s1);
                    b9.setEnabled(false);
                }
                count++;
                if(count>=5){
                    if(s1=="O"){
                        if(b1.getText()=="O"&&b2.getText()=="O"&&b3.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b1.getText()=="O"&&b4.getText()=="O"&&b7.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b3.getText()=="O"&&b6.getText()=="O"&&b9.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b7.getText()=="O"&&b8.getText()=="O"&&b9.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b1.getText()=="O"&&b5.getText()=="O"&&b9.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b3.getText()=="O"&&b5.getText()=="O"&&b7.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b2.getText()=="O"&&b5.getText()=="O"&&b8.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b4.getText()=="O"&&b5.getText()=="O"&&b6.getText()=="O"){
                            result="O Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                    }
                    if(s1=="X"){
                        if(b1.getText()=="X"&&b2.getText()=="X"&&b3.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b1.getText()=="X"&&b4.getText()=="X"&&b7.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b3.getText()=="X"&&b6.getText()=="X"&&b9.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b7.getText()=="X"&&b8.getText()=="X"&&b9.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b1.getText()=="X"&&b5.getText()=="X"&&b9.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b3.getText()=="X"&&b5.getText()=="X"&&b7.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b2.getText()=="X"&&b5.getText()=="X"&&b8.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                        if(b4.getText()=="X"&&b5.getText()=="X"&&b6.getText()=="X"){
                            result="X Wins";
                            JOptionPane.showMessageDialog(null,result);
                            won=1;
                        }
                    }
                    if(count==9&&won==0){
                        result="Match Draw let try again";
                        JOptionPane.showMessageDialog(null,result);
                    }
                }
                if(s1=="O"){
                    s1="X";
                }
                else
                    s1="O";
                if(e.getSource()==reset||won==1){
                    s1="0";
                    b1.setEnabled(true);
                    b2.setEnabled(true);
                    b3.setEnabled(true);
                    b4.setEnabled(true);
                    b5.setEnabled(true);
                    b6.setEnabled(true);
                    b7.setEnabled(true);
                    b8.setEnabled(true);
                    b9.setEnabled(true);
                    b0.setEnabled(true);
                    bx.setEnabled(true);
                    b1.setText("");
                    b2.setText("");
                    b3.setText("");
                    b4.setText("");
                    b5.setText("");
                    b6.setText("");
                    b7.setText("");
                    b8.setText("");
                    b9.setText("");
                    count=0;
                    won=0;
                }
            }
        }
    }}
