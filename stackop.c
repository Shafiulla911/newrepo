#include <stdio.h>
#include <stdlib.h>
#define MAX 6

int stack[MAX], ele, num, top = -1;

void push(int);
int pop();
void stackstatus();
void display();

int main()
{
    int ch;
    while (1)
    {
        printf("1.Push \n2.Pop \n3.Stack Status \n4.Display\n 5.Exit \n Enter ur choice:");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            printf("\n Enter element to Push: ");
            scanf("%d", &ele);
            push(ele);
            break;

        case 2:
            ele = pop();
            printf("\n Popped element from stack: %d", ele);
            break;

        case 3:
            stackstatus();
            break;

        case 4:
            display();
            break;

        case 5:
            exit(0);

        default:
            printf("Invalid Choice:\n");
        }
    }
}

void push(int ele)
{
    if (top == MAX - 1)
    {
        printf("\n Stack is Overflow...\n");
    }
    else
    {
        stack[++top] = ele; // Increment top and push element to stack
    }
}

int pop()
{
    if (top == -1)
    {
        printf("\n Stack is underflow! \n");
    }
    else
    {
        return stack[top--]; // pop last element inserted from stack
    }
}

void stackstatus()
{
    if (top == MAX - 1)
    {
        printf("Stack is Full!\n");
    }
    display();
}

void display()
{
    int i;
    if (top == -1)
    {
        printf("Stack is empty!\n");
    }
    else
    {
        printf("Stack eles are \n");
        for (i = top; i >= 0; i--)
        {
            printf("%d \n", stack[i]);
        }
    }
}