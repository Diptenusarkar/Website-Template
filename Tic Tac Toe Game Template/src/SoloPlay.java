import java.awt.event.*;
import javax.swing.*;
import java.awt.*;
import javax.swing.JOptionPane;
import java.lang.Math;
import java.util.Random;
class SoloPlay implements ActionListener{
    JFrame f;
    JButton b1,b2,b3,b4,b5,b6,b7,b8,b9,b0,bx,reset,sel;
    JLabel l1,l2;
    JPanel p;
    String s1,result;
    int count=0,flag=0;
    int x,win=0;
    SoloPlay(String s){
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
    public static int computersTurn(){
        int x=(int)(Math.random()*((10-1)+1))+1;
        return x;
    }
    boolean won(){
        if(s1=="O"){
            if(b1.getText()=="O"&&b2.getText()=="O"&&b3.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b1.getText()=="O"&&b4.getText()=="O"&&b7.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b3.getText()=="O"&&b6.getText()=="O"&&b9.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b7.getText()=="O"&&b8.getText()=="O"&&b9.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b1.getText()=="O"&&b5.getText()=="O"&&b9.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b3.getText()=="O"&&b5.getText()=="O"&&b7.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b2.getText()=="O"&&b5.getText()=="O"&&b8.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b4.getText()=="O"&&b5.getText()=="O"&&b6.getText()=="O"){
                result="O Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
        }
        if(s1=="X"){
            if(b1.getText()=="X"&&b2.getText()=="X"&&b3.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b1.getText()=="X"&&b4.getText()=="X"&&b7.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b3.getText()=="X"&&b6.getText()=="X"&&b9.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b7.getText()=="X"&&b8.getText()=="X"&&b9.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b1.getText()=="X"&&b5.getText()=="X"&&b9.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b3.getText()=="X"&&b5.getText()=="X"&&b7.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b2.getText()=="X"&&b5.getText()=="X"&&b8.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
            if(b4.getText()=="X"&&b5.getText()=="X"&&b6.getText()=="X"){
                result="X Wins";
                JOptionPane.showMessageDialog(null,result);
                win=1;
                return true;
            }
        }
        if(count==9){
            result="Match Draw let try again";
            JOptionPane.showMessageDialog(null,result);
            return true;
        }
        else
            return false;
    }
    public void actionPerformed(ActionEvent e){
        flag=0;
        if(e.getSource()==bx)
            s1=bx.getText();
        if(e.getSource()==b0)
            s1=b0.getText();
        if((e.getSource()==b1)||(e.getSource()==b2)||(e.getSource()==b3)||(e.getSource()==b4)||(e.
                getSource()==b5)||(e.getSource()==b6)||(e.getSource()==b7)||(e.getSource()==b8)||(e.getSource()
                ==b9)){
            if(s1.equals(null))
                return;
            if(s1=="X"||s1=="O"){
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
                if(count>=5)
                    won();
                while(((count<9)&&(win==0))&&flag==0){
                    if(s1=="O"){
                        s1="X";
                    }
                    else
                        s1="O";
                    x=computersTurn();
                    switch(x){
                        case 1:if(b1.getText()==""){
                            b1.setText(s1);
                            b1.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 2:if(b2.getText()==""){
                            b2.setText(s1);
                            b2.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 3:if(b3.getText()==""){
                            b3.setText(s1);
                            b3.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 4:if(b4.getText()==""){
                            b4.setText(s1);
                            b4.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 5:if(b5.getText()==""){
                            b5.setText(s1);
                            b5.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 6:if(b6.getText()==""){
                            b6.setText(s1);
                            b6.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 7:if(b7.getText()==""){
                            b7.setText(s1);
                            b7.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 8:if(b8.getText()==""){
                            b8.setText(s1);
                            b8.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                        case 9:if(b9.getText()==""){
                            b9.setText(s1);
                            b9.setEnabled(false);
                            flag=1;
                            count++;
                        }
                            break;
                    }
                    if(won()){
                        break;
                    }
                    if(s1=="O"){
                        s1="X";
                    }
                    else
                        s1="O";
                }
            }
        }
        if(e.getSource()==reset||win==1){
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
            s1="";
            count=0;
            flag=0;
            win=0;
        }
    }
}
